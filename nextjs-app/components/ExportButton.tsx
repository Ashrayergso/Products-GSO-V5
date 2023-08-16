import React from 'react';
import { exportList } from '../utils/exportList';

interface ExportButtonProps {
  selectedProducts: Array<Product>;
}

const ExportButton: React.FC<ExportButtonProps> = ({ selectedProducts }) => {
  const handleExport = async () => {
    try {
      await exportList(selectedProducts);
      alert('List exported successfully!');
    } catch (error) {
      console.error('Failed to export list:', error);
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleExport}
    >
      Export
    </button>
  );
};

export default ExportButton;