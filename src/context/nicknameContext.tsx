import React, {useState, createContext, ReactNode, useContext} from 'react';

interface NicknameContextInterface {
    nickname: string | null,
    saveNickname: (arg0: string) => void
}

const NicknameContext = createContext<NicknameContextInterface>(
    {
        nickname: null,
        saveNickname: () => {},
    });

const NicknameProvider = ({children}: { children: ReactNode }) => {
    const [nickname, setNickname] = useState<string | null>(null);

    const saveNickname = (val: string) => {
        setNickname(val);
    };

    return (
        <NicknameContext.Provider value={{nickname, saveNickname}}>
            {children}
        </NicknameContext.Provider>
    );
}

function useNickname() {
    const context = useContext(NicknameContext);
    if (context === undefined) {
        throw new Error(`useNickname must be used within a NicknameContext`);
    }
    return context;
}

export {NicknameProvider, useNickname};