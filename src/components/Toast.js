import { CheckIcon, CloseIcon, InfoIcon, WornIcon } from "./Icons";

const Toast = ({ type, message, onClose, toastsFade, toast_id, position }) => {

    const typeClasses = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500',
    };

    // icons
    const typeIcons = {
        success: <CheckIcon />,
        error: <CloseIcon />,
        warning: <WornIcon />,
        info: <InfoIcon />,
    };

    //  custom color classes  
    const typeTextClasses = {
        success: 'text-green-500',
        error: 'text-red-500',
        warning: 'text-orange-500',
        info: 'text-blue-500',
    };

    const typeBgClasses = {
        success: 'bg-green-100',
        error: 'bg-red-100',
        warning: 'bg-orange-100',
        info: 'bg-blue-100',
    };

    const typeDarkTextClasses = {
        success: 'dark:text-green-200',
        error: 'dark:text-red-200',
        warning: 'dark:text-orange-200',
        info: 'dark:text-blue-200',
    };

    const typeDarkBgClasses = {
        success: 'dark:bg-green-800',
        error: 'dark:bg-red-800',
        warning: 'dark:bg-orange-800',
        info: 'dark:bg-blue-800',
    };

    return (

        <>

            <div id={toast_id} className={`flex items-center w-full  ${typeClasses[type]} ${toastsFade} max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 `} role="alert">
                <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${typeTextClasses[type]} ${typeBgClasses[type]} rounded-lg ${typeDarkBgClasses[type]} ${typeDarkTextClasses[type]}`}>
                    {typeIcons[type]}
                </div>
                <div className="ms-3 text-sm font-normal">{message}</div>
                <button type="button" onClick={onClose} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                    <CloseIcon />
                </button>
            </div>

        </>




    );
};

export default Toast;
