import { useState } from "react";

function Form() {
    const initialValue = {
        name: "",
        email: "",
        message: "",
    };
    const [formData, setFormData] = useState(initialValue);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, undefined, 2));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
            />
            <br />
            <label>Email</label>
            <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />
            <br />
            <label>Message</label>
            <input
                type="text"
                value={formData.message}
                onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                }
            />
            <br />
            <button type="submit">Submit</button>
            <br />
            {/* <p>{JSON.stringify(formData)}</p> */}
        </form>
    );
}

export default Form;
