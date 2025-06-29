import React, { useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [materialName, setMaterialName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [materialType, setMaterialType] = useState("notes"); // Default: 'notes'

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles) => {
    const validFiles = newFiles
      .filter((file) => {
        const isValidType = [
          "image/jpeg",
          "image/png",
          "application/pdf",
        ].includes(file.type);
        const isValidSize = file.size <= 25 * 1024 * 1024; // Max 25MB
        return isValidType && isValidSize;
      })
      .map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
      }));

    setFiles([...files, ...validFiles]);
  };

  const handleRemoveFile = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleDone = () => {
    if (files.length >= 3) {
      alert("Successfully uploaded!");
      setFiles([]);
    } else {
      alert("Please upload at least 3 files before proceeding.");
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex justify-evenly flex-col lg:flex-row flex-grow p-5 lg:p-5 items-start animate-[fade-in_3s_ease-in-out] gap-5 lg:gap-0">
        {/* Upload Projects Section */}
        <div className="bg-[#557bb026] backdrop-blur-sm shadow-[0_0_4px] rounded-2xl p-7 box-border w-full max-w-[734px] min-h-[720px] lg:min-h-[720px] lg:mr-[2.15%] mb-5 lg:mb-0">
          <div className="flex flex-col gap-9 p-7 rounded-[13px] mt-[6%] box-border">
            <h2 className="text-[#1C0071] text-lg md:text-xl font-semibold leading-[31px] font-['Poppins']">
              Upload Projects
            </h2>
            <p className="text-[#6C606C] text-sm md:text-base font-normal leading-[22px] font-['Poppins']">
              Please upload at least 3 files in JPEG, PNG, or PDF format and
              ensure the file size is under 25 MB.
            </p>

            <div className="w-full h-auto lg:h-[314px] bg-[#EEF0F8] border border-[#1C0071] rounded-[9px] flex flex-col justify-center items-center gap-[9px] box-border p-4 lg:p-5 relative">
              {files.length > 0 ? (
                <div className="w-full max-h-32 lg:max-h-48 overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-[#1C0071] scrollbar-track-[#F3F4F6] scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex justify-between items-center bg-white p-3 lg:p-4 rounded-lg border border-[#E5E7EB]"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src="./file.png"
                          alt="File icon"
                          className="w-6 h-6"
                        />
                        <span className="text-[#1C0071] font-['Poppins'] text-sm font-medium">
                          {file.name}
                        </span>
                      </div>
                      <button
                        className="bg-none border-none p-1 cursor-pointer flex items-center justify-center"
                        onClick={() => handleRemoveFile(file.id)}
                      >
                        <img
                          src="/delete.png"
                          alt="Remove"
                          className="w-5 h-5"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <img
                    src="/clipboard.png"
                    alt="Upload icon"
                    className="w-12 h-12"
                  />
                  <p className="text-[#181D27] text-base lg:text-lg font-medium leading-[27px] font-['Poppins']">
                    Drop file or Browse
                  </p>
                  <p className="text-[#6C606C] text-sm lg:text-base font-normal leading-[22px] font-['Poppins']">
                    Format: JPEG, PNG, PDF | Max size: 25 MB
                  </p>
                </>
              )}
              <label
                htmlFor="file-upload"
                className="bg-[#1C0071] text-[#CCD9EC] px-4 lg:px-[18px] py-2 lg:py-[11px] rounded-[112px] border-none font-['Poppins'] text-sm lg:text-lg font-semibold cursor-pointer flex items-center gap-[11px] mt-4 lg:mt-5"
              >
                <img
                  src="/browseicon.png"
                  alt="Browse"
                  className="w-5 h-5 lg:w-[22px] lg:h-[22px]"
                />
                Browse
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                multiple
                onChange={handleFileInput}
                className="hidden"
              />
            </div>

            <div className="flex gap-[13px]">
              <button className="bg-transparent text-[#1C0071] border border-[#1C0071] w-full justify-center px-4 lg:px-[18px] py-2 lg:py-[11px] rounded-lg font-['Poppins'] text-sm lg:text-lg font-semibold cursor-pointer">
                Cancel
              </button>
              <button
                className="bg-[#1C0071] text-[#CCD9EC] w-full justify-center px-4 lg:px-[18px] py-2 lg:py-[11px] rounded-lg border-none font-['Poppins'] text-sm lg:text-lg font-semibold cursor-pointer"
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>

        {/* Material Details Section */}
        <div className="bg-[#557bb026] backdrop-blur-sm shadow-[0_0_4px] rounded-[14px] py-12 lg:py-[57px] px-6 lg:px-6 min-w-full lg:min-w-[528px] min-h-[720px] box-border w-full max-w-[734px] lg:max-w-none">
          <div className="flex flex-col gap-6 lg:gap-[25px] w-full max-w-[492px] mx-auto">
            <div className="flex flex-col gap-[7px]">
              <label className="font-['Poppins'] text-sm lg:text-lg font-medium text-[#1C0071] leading-[22px]">
                Enter The Material Name:
              </label>
              <input
                type="text"
                value={materialName}
                onChange={(e) => setMaterialName(e.target.value)}
                className="h-12 lg:h-[54px] min-w-full border border-[#1C0071] rounded-[10px] px-4 lg:px-[15px] text-sm lg:text-base box-border text-black bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-[7px]">
              <label className="font-['Poppins'] text-sm lg:text-lg font-medium text-[#1C0071] leading-[22px]">
                Choose Type of Material:
              </label>
              <div className="flex flex-row gap-8 lg:gap-[30px] items-end">
                <label className="flex items-center flex-row gap-3 lg:gap-[10px] cursor-pointer">
                  <input
                    type="radio"
                    checked={materialType === "notes"}
                    onChange={() => setMaterialType("notes")}
                    className="w-5 h-5"
                  />
                  <span className="font-['Poppins'] text-sm lg:text-[17px] text-[#1C0071]">
                    Notes
                  </span>
                </label>
                <label className="flex items-center flex-row gap-3 lg:gap-[10px] cursor-pointer">
                  <input
                    type="radio"
                    checked={materialType === "textbooks"}
                    onChange={() => setMaterialType("textbooks")}
                    className="w-5 h-5"
                  />
                  <span className="font-['Poppins'] text-sm lg:text-[17px] text-[#1C0071]">
                    TextBooks
                  </span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-[7px]">
              <label className="font-['Poppins'] text-sm lg:text-lg font-medium text-[#1C0071] leading-[22px]">
                Enter the Author Name:
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="h-12 lg:h-[54px] border border-[#1C0071] rounded-[10px] px-4 lg:px-[15px] text-sm lg:text-base w-full box-border bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-[7px]">
              <label className="font-['Poppins'] text-sm lg:text-lg font-medium text-[#1C0071] leading-[22px]">
                Enter Description:
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-28 lg:h-[142px] border border-[#1C0071] rounded-[10px] p-4 lg:p-[15px] text-sm lg:text-base w-full resize-none box-border bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-[7px]">
              <label className="font-['Poppins'] text-sm lg:text-lg font-medium text-[#1C0071] leading-[22px]">
                Available until:
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  value={availableUntil}
                  onChange={(e) => setAvailableUntil(e.target.value)}
                  className="h-8 lg:h-[38px] border border-[#1C0071] rounded-[10px] px-4 lg:px-[15px] text-sm lg:text-[17px] text-[#1C0071] w-full box-border bg-transparent"
                  placeholder="dd/mm/yy"
                />
                <img
                  src="/calender.png"
                  alt="Calendar icon"
                  className="absolute right-3 lg:right-[10px] top-1/2 transform -translate-y-1/2 w-5 h-5 lg:w-[22px] lg:h-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Upload;
