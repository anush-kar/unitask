import React, { useState } from "react";


function PostTask() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [fees, setFees] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      task,
      description,
      fees,
    };
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Task posted successfully');
        // You can add further actions here, like clearing the form or displaying a success message.
      } else {
        console.error('Failed to post task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    return(
        <div className="Content flex justify-center items-center h-screen">
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-bold text-white mb-4 text-center">Post a Task</h1>
                {/*Username input*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Task
                  </label>
                  <input
                    type="text"
                    name="task"
                    id="username"
                    className="text-black text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                  ></input>
                </div>

                {/*Password input*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="text-black text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-transparent-opacity-0.1"
                    id="password"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Fees
                  </label>
                  <input
                    type="text"
                    name="fees"
                    className="text-black text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-transparent-opacity-0.1"
                    id="password"
                    value={fees}
                    onChange={(e) => setFees(e.target.value)}
                    required
                  />
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block w-full rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out custom-button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Post task
                </button>
              </form>
            </div>
        </div>
    )
}

export default PostTask