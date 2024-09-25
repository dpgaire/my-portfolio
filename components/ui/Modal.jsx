import { FaTimes } from "react-icons/fa";
import { SubmitButton } from ".";

const Modal = ({ onClose, onDownload, onPreview }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div
        id="modal"
        className="bg-white relative p-10 rounded-lg shadow-lg transform scale-95 transition-transform duration-300 ease-out animate-modalFadeIn"
      >
        {/* Modal Header with Title and Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Download or Preview PDF
          </h2>
          <button
            className="text-gray-600 p-1 shadow-lg border rounded-full hover:text-gray-800 absolute top-1 right-1"
            onClick={onClose}
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <SubmitButton text="Download" onClick={onDownload} />
          <SubmitButton text="Preview" onClick={onPreview} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
