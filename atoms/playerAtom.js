import { atom, selector } from "recoil";

export  const playerState = atom({
    key: "playerState",
    default: { },
});

export const playerSelector = selector({
    key: "playerSelector",
    get: ({get}) => {
        const playerData = get(playerState)
        return playerData 
    }
})