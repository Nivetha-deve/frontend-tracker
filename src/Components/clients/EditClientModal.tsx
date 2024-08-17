import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    Input,
    Radio, RadioGroup, Stack, Flex,
    Textarea,
    Divider
  } from '@chakra-ui/react'
import { FiEdit2 } from 'react-icons/fi';


const EditClientModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Button onClick={onOpen}><FiEdit2 /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit group</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
              <Box>
                  <Box margin={"5px"}>Client name</Box>
                  <Box margin={"10px"}><Input /></Box>
              </Box>
              <Box>
                  <Box margin={"5px"}>Client Address</Box>
                  <Box margin={"10px"}><Textarea placeholder='Enter address' /></Box>
              </Box>
              <Box>
                  <Box margin={"5px"}>Client Note</Box>
                  <Box margin={"10px"}><Textarea placeholder='Enter note' /></Box>
              </Box>
            </ModalBody>
            <Divider />
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button background={"#038fce"} color="white">Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default EditClientModal


import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi';

const EditClientModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientNote, setClientNote] = useState('');

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const handleSave = () => {
        // Add your save logic here
        onClose();
    }

    return (
        <>
            <button onClick={onOpen} className="p-2 rounded-full hover:bg-gray-200">
                <FiEdit2 />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-50 flex">
                    <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">Edit group</p>
                            <div className="cursor-pointer z-50" onClick={onClose}>
                                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="my-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientName">
                                    Client name
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="clientName"
                                    type="text"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientAddress">
                                    Client Address
                                </label>
                                <textarea 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="clientAddress"
                                    placeholder="Enter address"
                                    value={clientAddress}
                                    onChange={(e) => setClientAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientNote">
                                    Client Note
                                </label>
                                <textarea 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="clientNote"
                                    placeholder="Enter note"
                                    value={clientNote}
                                    onChange={(e) => setClientNote(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button 
                                onClick={onClose}
                                className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSave}
                                className="modal-close px-4 bg-[#038fce] p-3 rounded-lg text-white hover:bg-[#026d9e]"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditClientModal