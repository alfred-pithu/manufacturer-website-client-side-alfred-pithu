import React from 'react';

const AddAProduct = () => {

    const addToInventory = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const img = e.target.img.files[0]
        // console.log(img);
        const description = e.target.description?.value;
        const minimumOrder = parseInt(e.target.minimumOrder?.value);
        const available = parseInt(e.target.available?.value);
        const price = parseInt(e.target.price?.value);




        const formData = new FormData()
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=6686968ed82ee3233c86a814b2b3a008`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.url);
            })



        // e.target.reset()
    }

    return (
        <div>
            <h2 className='text-xl text-center font-semibold my-3'>Add a Product</h2>

            <form onSubmit={addToInventory} action="" className='form-control lg:max-w-lg gap-y-5 mx-auto'>
                <input className=' input input-bordered rounded h-9' required type="text" placeholder='name' name='name' />
                <input className=' input input-bordered rounded h-9' required type="file" placeholder='image' name='img' />
                <input className=' input input-bordered rounded h-9' required type="text" placeholder='description' name='description' />
                <input className=' input input-bordered rounded h-9' required type="number" placeholder='minimum order' name='minimumOrder' />
                <input className=' input input-bordered rounded h-9' required type="number" placeholder='available' name='available' />
                <input className=' input input-bordered rounded h-9' required type="number" placeholder='price' name='price' />


                <input className=' h-9 btn btn-black' required type="submit" value='Add to Inventory' />
            </form>
        </div>
    );
};

export default AddAProduct;