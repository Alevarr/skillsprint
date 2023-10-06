import { useState } from "react"
import Cookies from "universal-cookie"

export default () : [string | null, (token: string) => void] => {
    const cookies = new Cookies();
    const [token, setCookie] = useState<string | null>(cookies.get("skillsprint_auth_token"));
    const setToken = (token: string) => {
        cookies.set("skillsprint_auth_token", token);
        setCookie(token);

    }
    return [token, setToken];
}