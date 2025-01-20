import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL,category, bookDescription, bookPDFURL} = useLoaderData();


   const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science-Fiction",
    "Fantasy",
    "Horror",
    "History",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value)
  }
  // handle book submission
     const handleUpdate = (event) => {
       event.preventDefault();
       const form = event.target;
       const bookTitle = form.bookTitle.value;
       const authorName = form.authorName.value;
       const imageURL = form.imageURL.value;
       const category = form.categoryName.value;
       const bookDescription = form.bookDescription.value;
       const bookPDFURL = form.bookPDFURL.value;

       const updateBookObj ={
        bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
       }
      //  console.log(bookObj)
      // update book data

      fetch(`http://localhost:5000/book/${id}`,{
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data =>{
        
        // console.log(data);
        alert("Book is updated successfully!!!")
        
       })

       




     }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* First Row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="booktitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required defaultValue={bookTitle}/>
       </div>
       {/* authorName */}
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName}/>
       </div>
      </div>
      {/* Second Row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required defaultValue={imageURL} />
       </div>
       {/* authorName */}
       <div className='lg:w-1/2'>
       <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </Select>

       </div>
      </div>

      {/* bookDescription */}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required className='w-full' rows={6} defaultValue={bookDescription}/>
    
      </div>

      {/* bookPDFlink */}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="book pdf url" required defaultValue={bookPDFURL}/>
      </div>
      <Button type="submit" className='mt-5'>Update Book</Button>
      
    </form>
    </div>
  )
}

export default EditBooks