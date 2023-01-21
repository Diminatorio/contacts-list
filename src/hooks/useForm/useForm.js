import {useState} from "react";

export default function() {
    const [formVisible, setFormVisible] = useState({formVisible: false});
    const onChangeFormVisible = () => {
        setFormVisible({formVisible: !formVisible.formVisible})
    }
    return {formVisible, onChangeFormVisible}

}