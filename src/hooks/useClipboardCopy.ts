import { useCallback, useState } from 'react';

interface IUseClipboardCopy {
    copyToClipboard: (text: string) => Promise<void>;
    copyMessage: string;
}

const useClipboardCopy = (): IUseClipboardCopy => {
    const [copyMessage, setCopyMessage] = useState('Copy');

    const copyToClipboard = useCallback((text) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                setCopyMessage("Copied");
                setTimeout(() => {
                    setCopyMessage('Copy');
                }, 3000);
            }).catch(error => {
                console.error('Failed to copy', error);
            })
        } else {
            console.log('Clipboard API is not available');
        }
    }, []);
    return { copyToClipboard, copyMessage }
}

export default useClipboardCopy;