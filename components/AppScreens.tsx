'use client'

import { FaPhone, FaMapMarkerAlt, FaCheck, FaTimes, FaCalendarAlt } from 'react-icons/fa'

const HistoryScreen = () => {
  return (
    <div className="h-full bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">History</h2>
        <FaCalendarAlt className="text-milkyway-blue text-xl" />
      </div>
      
      {/* Calendar */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="text-center mb-3">
          <h3 className="font-semibold text-gray-800">May 2024</h3>
        </div>
        <div className="grid grid-cols-7 gap-1 text-xs">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-center text-gray-500 py-1">{day}</div>
          ))}
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={`text-center py-1 ${i === 24 ? 'bg-milkyway-blue text-white rounded-full' : 'text-gray-700'}`}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      
      {/* Past Deliveries */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-gray-800 mb-3">Past Deliveries for May 5, 2024</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Ethan Carrer</p>
              <p className="text-sm text-gray-600">123 Main St, Apt 2A</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Olivia Bennett</p>
              <p className="text-sm text-gray-600">456 Oak Ave, Unit 5</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const DeliveryDetailsScreen = () => {
  return (
    <div className="h-full bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Delivery Details</h2>
        <div className="w-8 h-8 bg-milkyway-blue rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">M</span>
        </div>
      </div>
      
      {/* Customer Information */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Customer Information</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-800">Sophia Carter</p>
            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
          </div>
          <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <FaPhone className="text-white text-sm" />
          </button>
        </div>
      </div>
      
      {/* Customer Location */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Customer Location</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-800">123 Box Street, Apt 4B</p>
            <p className="text-sm text-gray-600">New York, NY 10001</p>
          </div>
          <div className="flex space-x-2">
            <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-sm" />
            </button>
            <button className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-sm" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Order Details */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Order Details</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-700">Milk Pockets</span>
            <span className="font-medium text-gray-800">Qty: 1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Curd</span>
            <span className="font-medium text-gray-800">Qty: 1</span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
          <FaCheck className="text-sm" />
          <span>Delivered</span>
        </button>
        <button className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
          <FaTimes className="text-sm" />
          <span>Cancelled</span>
        </button>
      </div>
    </div>
  )
}

export { HistoryScreen, DeliveryDetailsScreen }
