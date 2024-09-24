import { SubmitButton } from ".";

const Modal = ({ onClose, onDownload, onPreview }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Download or Preview PDF</h2>
        <div className="flex gap-4">
          <SubmitButton text="Download" onClick={onDownload} />
          <SubmitButton text="Preview" onClick={onPreview} />
        </div>
        <button className="mt-4 text-gray-500 underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
