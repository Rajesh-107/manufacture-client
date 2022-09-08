import React from 'react';

const CancelModal = ({order, handleCancelOrder}) => {
    return (
        <div>
             <input type="checkbox" id="order-cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className='text-2xl font-extrabold'>Are You Sure..?</h2>
                    <div className='text-7xl text-red-600 flex justify-center mx-auto'>
                        
                    </div>
                    <div className='flex gap-x-3 justify-end'>
                        <div className="modal-action">
                            <label for="order-cancel-modal" className="btn">No, Cancel</label>
                        </div>
                        <div className="modal-action">
                            <label onClick={() => handleCancelOrder(order._id)} for="order-cancel-modal" className="btn bg-red-600">Yes, Delete</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;