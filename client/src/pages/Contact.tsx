import React from "react";
import "../styles/pages/Contact.css";

type FieldProps = {
    name: string;
    value: string;
    children: React.ReactNode;
    onChange: (e: any) => void;
};

const Field = ({ name, value, onChange }: FieldProps) => {
    return (
        <div>
            <br />
            <input
                required
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
            Courriel: "",
            Message: "",
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
        if (this.state.Courriel.match(mailformat)) {
            console.log(data);
        } else {
            alert("err");
            console.log(data);
        }
    }
    handleChange(e: any) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <>  
                <h2 className="title ch1">Me contacter</h2>
                <div className="Contact modules">
                    <form onSubmit={this.handleSubmit}>
                        <div className="message-container">
                            <textarea
                                name="Message"
                                required
                                placeholder="Message"
                                id="message"
                                cols={30}
                                value={this.state.name}
                                onChange={this.handleChange}
                                rows={10}
                            ></textarea>
                        </div>
                        <div className="Fields">
                            <Field
                                name="Prénom"
                                value={this.state.name}
                                onChange={this.handleChange}
                            >
                                Prénom
                            </Field>
                            <Field
                                name="Courriel"
                                value={this.state.name}
                                onChange={this.handleChange}
                            >
                                Couriel
                            </Field>
                            <div className="btn">
                                <button> Envoyer </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Contact;
