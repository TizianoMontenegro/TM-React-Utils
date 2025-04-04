import axios from "axios";
import { Character } from "../models";
import { apiCallResult, loadAbort } from "../utilities";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacter = (id: number = 1): apiCallResult<Character> => {
  const controller = loadAbort();
  return {
    call: axios.get<Character>(`${BASE_URL}/character/${id}`, { signal: controller.signal }),
    controller
  }
}

export const newCharacter = (character: Character): apiCallResult<Character> => {
  const controller = loadAbort();
  return {
    call: axios.post<Character>(`${BASE_URL}/character`, character, {signal: controller.signal}),
    controller
  }
}
