'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Input from "../Input/Input";
import { Popover, Select, SelectContent, SelectItem, SelectList } from "@/components/Select/Select";
import { eventCategories } from "@/constant";
import DatePicker from "../DatePicker/DatePicker";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import { FileUploader } from "../FileUploader/FileUploader";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription } from "@/components/Modal/Modal";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";


const EventForm = ({ type = 'create', userId }) => {


    const router = useRouter();
    useEffect(() => {
        // Check if the user is logged in by checking for userData in localStorage
        const userData = localStorage.getItem('userData');
        if (!userData) {
            // If no user data, redirect to the login page
            router.push('/login');
        } 
    }, [router]);

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        location: '',
        price: '',
        url: '',
        imageUrl: '',
        selectedCategory: '',
        startDate: null,
        endDate: null,
        startTime: '',
        endTime: '',
        isFree: false,
        files: []
    });

    const [errors, setErrors] = useState({});
    const [storedData, setStoredData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch data from localStorage on component mount
    useEffect(() => {
        const data = localStorage.getItem('eventData');
        if (data) {
            setStoredData(JSON.parse(data));
        } else {
            setStoredData([]); // Ensure storedData is always an array
        }

        if (type === 'update' && userId) {
            const eventToEdit = JSON.parse(data).find(event => event._id === userId);
            if (eventToEdit) {
                setFormState(eventToEdit); // Prefill the form with existing data
            }
        }
    }, [type, userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleFileChange = (acceptedFiles) => {
        setFormState((prevState) => ({
            ...prevState,
            files: acceptedFiles
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formState.title) newErrors.title = 'Title is required';
        if (!formState.description) newErrors.description = 'Description is required';
        if (!formState.location) newErrors.location = 'Location is required';
        if (!formState.price && !formState.isFree) newErrors.price = 'Price is required if not free';
        if (!formState.url) newErrors.url = 'URL is required';
        if (!formState.selectedCategory) newErrors.selectedCategory = 'Category is required';
        if (!formState.startDate) newErrors.startDate = 'Start Date is required';
        if (!formState.endDate) newErrors.endDate = 'End Date is required';
        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            let updatedData = [...storedData];
            let id;

            if (type === 'update' && userId) {
                // Find the existing event and update it
                id = userId;
                const index = updatedData.findIndex(event => event._id === userId);
                if (index !== -1) {
                    updatedData[index] = { ...formState, _id: userId };
                }
            } else {
                // Create new event
                id = Math.random().toString(36).substr(2, 9); // Generate a random ID
                const data = { ...formState, _id: id };

                // Convert files to URLs for storage
                const fileUrls = formState.files.map(file => URL.createObjectURL(file));
                data.files = fileUrls;

                updatedData.push(data);
            }

            localStorage.setItem('eventData', JSON.stringify(updatedData));
            setStoredData(updatedData); // Update local state
            setIsModalOpen(true); // Show success modal
        }
    };

    const handleDateChange = (dateType, date, time) => {
        setFormState((prevState) => ({
            ...prevState,
            [dateType]: date,
            [`${dateType}Time`]: time
        }));
        if (date) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [dateType]: ''
            }));
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        router.push('/dashboard');
    };
    return (
        <div className="flex flex-col gap-5 pb-5">
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full">
                    <Input
                        type="text"
                        name="title"
                        placeholder="Event title"
                        value={formState.title}
                        onChange={handleInputChange}
                        className="w-full h-10 rounded-lg"
                    />
                    {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
                </div>
                <div className="w-full">
                    <Select onSelect={(value) => setFormState((prevState) => ({ ...prevState, selectedCategory: value }))} value={formState.selectedCategory} placeholder="Category">
                        <Popover className="bg-white dark:bg-black/5">
                            <SelectContent>
                                <SelectList>
                                    {eventCategories.map((category, index) => (
                                        <SelectItem key={index} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectList>
                            </SelectContent>
                        </Popover>
                    </Select>
                    {errors.selectedCategory && <span className="text-red-500 text-sm">{errors.selectedCategory}</span>}
                </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full">
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formState.description}
                        onChange={handleInputChange}
                        className="w-full textarea rounded-2xl h-64"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                </div>
                <div className="w-full">
                    <FileUploader
                        imageUrl={formState.files[0] ? URL.createObjectURL(formState.files[0]) : ''}
                        onFieldChange={(imageUrl) => setFormState(prevState => ({ ...prevState, imageUrl }))}
                        setFiles={handleFileChange}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full">
                    <div className="flex items-center h-[54px] w-full rounded-full bg-grey-50 px-4 py-2">
                        <Image src="/assets/icons/location-grey.svg" alt="location" width={24} height={24} />
                        <Input
                            type="text"
                            name="location"
                            placeholder="Event location or Online"
                            value={formState.location}
                            onChange={handleInputChange}
                            className="w-full h-10 rounded-lg ml-3"
                        />
                    </div>
                    {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}
                </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full">
                    <div className="flex flex-col w-full rounded-full bg-grey-50 px-4 py-2">
                        <p className="ml-3 text-grey-600">Start Date</p>
                        <DatePicker
                            selected={formState.startDate}
                            onSelect={(date) => handleDateChange('startDate', date, formState.startTime)}
                            time={formState.startTime}
                            setTime={(time) => {
                                handleDateChange('startDate', formState.startDate, time)
                                setFormState((prevState) => ({
                                    ...prevState,
                                    ['startTime']: time
                                }));
                            }}
                            timer
                            activeClassName='bg-primary text-white dark:bg-primary dark:text-white'
                        />
                        {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex flex-col w-full rounded-full bg-grey-50 px-4 py-2">
                        <p className="ml-3 text-grey-600">End Date</p>
                        <DatePicker
                            selected={formState.endDate}
                            onSelect={(date) => handleDateChange('endDate', date, formState.endTime)}
                            time={formState.endTime}
                            setTime={(time) => {
                                handleDateChange('endDate', formState.endDate, time)
                                setFormState((prevState) => ({
                                    ...prevState,
                                    ['endTime']: time
                                }));
                            }}
                            timer
                            activeClassName='bg-primary text-white dark:bg-primary dark:text-white'
                        />
                        {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate}</span>}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full">
                    <div className="flex items-center h-[54px] w-full rounded-full bg-grey-50 px-4 py-2">
                        <Image src="/assets/icons/dollar.svg" alt="dollar" width={24} height={24} />
                        <Input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formState.price}
                            onChange={handleInputChange}
                            className="w-full rounded-md h-10 ml-3"
                            disabled={formState.isFree} // Disable input if isFree is true
                        />
                        <div className="w-full flex items-center ml-4">
                            <CheckBox
                                label="Free Ticket"
                                isChecked={formState.isFree}
                                onCheckedChange={() => setFormState((prevState) => ({ ...prevState, isFree: !prevState.isFree }))}
                            />
                        </div>
                    </div>
                    {errors.price && !formState.isFree && <span className="text-red-500 text-sm">{errors.price}</span>}
                </div>
                <div className="w-full">
                    <div className="flex items-center h-[54px] w-full rounded-full bg-grey-50 px-4 py-2">
                        <Image src="/assets/icons/link.svg" alt="link" width={24} height={24} />
                        <Input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={formState.url}
                            onChange={handleInputChange}
                            className="w-full rounded-md h-10 ml-3"
                        />
                    </div>
                    {errors.url && <span className="text-red-500 text-sm">{errors.url}</span>}
                </div>
            </div>

            <Button type="submit" className="bg-primary text-white w-full" onClick={handleSubmit}>
                {type === 'update' ? 'Update Event' : 'Create Event'}
            </Button>
            {isModalOpen && (
                <Modal Open={isModalOpen}>
                    <ModalContent>
                        <ModalHeader>
                            <div className="text-center flex justify-center items-center">
                                <FaCheckCircle className="fill-green-400 w-14 h-14" />
                            </div>
                            <ModalTitle>{type === 'update' ? 'Updated Successfully' : 'Success'}</ModalTitle>
                            <ModalDescription>
                                Your event has been {type === 'update' ? 'updated' : 'saved'} successfully.
                            </ModalDescription>
                        </ModalHeader>
                        <Button onClick={handleCloseModal} className='bg-transparent border-2 !text-white !bg-primary dark:border-[#09090b]'>Continue</Button>
                    </ModalContent>
                </Modal>
            )}
        </div>
    );
};

export default EventForm;
