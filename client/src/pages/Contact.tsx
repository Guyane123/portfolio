import React from "react";
import "../styles/pages/Contact.css";

type FieldProps = {
    name: string;
    value: string;
    children: React.ReactNode;
    onChange: (e: any) => void;
};

const Field = ({ name, value, children, onChange }: FieldProps) => {
    return (
        <div>
            <label htmlFor={name}>{children}</label>
            <br />
            <input
                placeholder={name}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
};

class Contact extends React.Component<any, any> {
    constructor(props: null) {
        super(props);
        this.state = {
            email: "",
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(): void {
        document.title = "Damien Claret | Contact";
    }

    handleSubmit(e: any) {
        e.preventDefault();
        var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const data = JSON.stringify(this.state);
        if (this.state.email.match(mailformat)) {
            console.log(data);
        } else {
            alert("err");
            console.log(data);
        }
    }
    handleChange(e: any) {
        console.log(e);
        const name = e.target.name;
        const type = e.target.type;
        const value = type === "text" ? e.target.value : null;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="Contact modules">
                <h1 className="title">Me contacter</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="Fields">
                        <Field
                            name="Prénom"
                            value={this.state.name}
                            onChange={this.handleChange}
                        >
                            Prénom
                        </Field>
                        <Field
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        >
                            Email
                        </Field>
                    </div>
                    <div className="message-container">
                        <Field
                            name="message"
                            value={this.state.name}
                            onChange={this.handleChange}
                        >
                            Message
                        </Field>
                    </div>
                <div className="btn">
                    <button> Envoyer </button>
                </div>
                </form>
            </div>
        );
    }
}

export default Contact;
