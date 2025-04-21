import React from 'react';

interface InputProps {
  label: string;          // Label untuk input
  type: string;           // Tipe input (text, password, email, dll)
  placeholder: string;    // Placeholder untuk input
  value: string;          // Nilai dari input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Fungsi untuk menangani perubahan nilai
  required?: boolean;     // Apakah input ini wajib diisi
  disabled?: boolean;     // Apakah input ini dinonaktifkan
  error?: string;         // Pesan error jika validasi gagal
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${error ? 'border-red-500' : 'border-gray-300'} 
          ${disabled ? 'bg-gray-100' : 'bg-white'}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
