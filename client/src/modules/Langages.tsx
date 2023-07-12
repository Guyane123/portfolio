import React, { ReactNode, useCallback } from "react";

const LANGAGES = [
    {
        category: "frontend",
        isBackEnd: false,
        isFrontEnd: true,
        isFullStack: true,
        name: "HTML",
        level: "Je maîtrise",
        date: "Apprentissage depuis 2021",
        logo: "../assets/langages/HTML.svg",
    },
    {
        category: "frontend",
        isBackEnd: false,
        isFrontEnd: true,
        isFullStack: true,
        name: "CSS",
        level: "Je maîtrise",
        date: "Apprentissage depuis 2021",
        logo: "../assets/langages/CSS.svg",
    },
    {
        category: "frontend backend",
        isFrontEnd: true,
        isBackEnd: true,
        isFullStack: true,
        name: "Javascript",
        level: "Je maîtrise",
        date: "Apprentissage depuis 2021",
        logo: "../assets/langages/JavaScript.svg",
    },
    {
        category: "frontend",
        name: "React",
        isBackEnd: false,
        isFrontEnd: true,
        isFullStack: true,
        level: "Je connais",
        date: "Apprentissage depuis 2022",
        logo: "../assets/langages/React.svg",
    },
    {
        category: "frontend backend",
        isFrontEnd: true,
        isBackEnd: true,
        isFullStack: true,
        name: "TypeScript",
        level: "Je maîtrise",
        date: "Apprentissage depuis 2023",
        logo: "../assets/langages/CSS.svg",
    },
    {
        category: "backend",
        isFrontEnd: false,
        isBackEnd: true,
        isFullStack: true,
        name: "Node",
        level: "Je débute",
        date: "Apprentissage depuis 2023",
        logo: "../assets/langages/Nodejs.svg",
    },
];

type SearchbarProps = {
    filterText: string;
    isBackEnd: boolean;
    isFrontEnd: boolean;
    isFullStack: boolean;
    onFilterTextChange: (e: string) => void;
    onFullStackChange: (e: boolean) => void;
    onFrontEndChange: (e: boolean) => void;
    onBackEndChange: (e: boolean) => void;
};
// const Searchbar = function({props}:{props : {filterText: string, isFrontEnd:boolean, isBackEnd:boolean, isFullStack:boolean}}) {
const Searchbar = function ({
    isBackEnd,
    isFullStack,
    isFrontEnd,
    onFullStackChange,
    onBackEndChange,
    onFrontEndChange,
}: SearchbarProps) {
    localStorage.setItem("Account", "admin");

    // function handleFilterTextChange(e: any) {
    //     onFilterTextChange(e.target.value)
    // }
    const handleFullStackChange = useCallback(function (e: any) {
        console.log(e.target);
        onFullStackChange(e.target.checked);
    }, []);
    const handleFrontEndChange = useCallback(function (e: any) {
        console.log(e.target);
        onFrontEndChange(e.target.checked);
    }, []);
    const handleBackEndChange = useCallback(function (e: any) {
        console.log(e.target);
        onBackEndChange(e.target.checked);
    }, []);

    return (
        <>
            <div className="inputs-list">
                <div className="input">
                    <label htmlFor="fullstack">FullStack</label>
                    <input
                        type="radio"
                        id="fullstack"
                        name="radio"
                        checked={isFullStack}
                        onChange={handleFullStackChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="frontend">Front-End</label>
                    <input
                        type="radio"
                        id="frontend"
                        name="radio"
                        checked={isFrontEnd}
                        onChange={handleFrontEndChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="backend">Back-End</label>
                    <input
                        type="radio"
                        id="backend"
                        name="radio"
                        checked={isBackEnd}
                        onChange={handleBackEndChange}
                    />
                </div>
            </div>
        </>
    );
};

const Title = ({ children }: { children: ReactNode }) => {
    return <div className="title">{children}</div>;
};

const Langage = ({ rows }: any) => {
    return (
        <>
            <div className="langages-item">
                <div className={rows.name + " " + "langagesLogo"}></div>
                <div style={{ fontWeight: "900" }}>{rows.name}</div>
                <p className="date">{rows.date}</p>

                {rows.level == "Je maîtrise" ? (
                    <h5 className="level" style={{ color: "red" }}>
                        {rows.level}
                    </h5>
                ) : rows.level == "Je connais" ? (
                    <h5 className="level" style={{ color: "orange" }}>
                        {rows.level}
                    </h5>
                ) : (
                    <h5 className="level" style={{ color: "green" }}>
                        {rows.level}
                    </h5>
                )}
            </div>
        </>
    );
};

type langages = {
    langages: Array<{
        category: string;
        name: String;
        isFullStack: boolean;
        isBackEnd: boolean;
        isFrontEnd: boolean;
    }>;
    isFrontEnd: boolean;
    isBackEnd: boolean;
    isFullStack: boolean;
    filterText: string;
};
const Langages = ({
    langages,
    isFrontEnd,
    isBackEnd,
    isFullStack,
    filterText,
}: langages) => {
    let lastCategory: any = null;
    const rows: ReactNode[] = [];

    langages.forEach((p) => {
        if (p !== lastCategory) {
            lastCategory = p.category;
        }
        if (isFullStack && p.isFullStack == false) {
            return;
        }
        if (p.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (isBackEnd && p.isBackEnd == false) {
            return;
        }
        if (isFrontEnd && p.isFrontEnd == false) {
            return;
        }
        rows.push(<Langage key={p.name} rows={p} />);
    });
    return <>{rows}</>;
};

type LangagesComponentState = {
    filterText: string;
    isFullStack: boolean;
    isBackEnd: boolean;
    isFrontEnd: boolean;
};

class LangagesComponent extends React.Component<any, LangagesComponentState> {
    constructor({ props }: any) {
        super(props);
        this.state = {
            filterText: "",
            isFullStack: false,
            isBackEnd: false,
            isFrontEnd: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleIsFullStackChange = this.handleIsFullStackChange.bind(this);
        this.handleIsBackEndChange = this.handleIsBackEndChange.bind(this);
        this.handleIsFrontEndChange = this.handleIsFrontEndChange.bind(this);
    }

    handleFilterTextChange(filterText: string) {
        this.setState({ filterText });
    }
    handleIsFullStackChange(isFullStack: boolean) {
        this.setState({ isFullStack, isBackEnd: false, isFrontEnd: false });
    }
    handleIsBackEndChange(isBackEnd: boolean) {
        this.setState({ isFullStack: false, isBackEnd, isFrontEnd: false });
    }
    handleIsFrontEndChange(isFrontEnd: boolean) {
        this.setState({ isFullStack: false, isBackEnd: false, isFrontEnd });
    }

    render(): React.ReactNode {
        return (
            <>
                <Title>Mes compétences</Title>
                <Searchbar
                    filterText={this.state.filterText}
                    isFullStack={this.state.isFullStack}
                    isBackEnd={this.state.isBackEnd}
                    isFrontEnd={this.state.isFrontEnd}
                    onFilterTextChange={this.handleFilterTextChange}
                    onFullStackChange={this.handleIsFullStackChange}
                    onBackEndChange={this.handleIsBackEndChange}
                    onFrontEndChange={this.handleIsFrontEndChange}
                />
                <div className="langages-list">
                    <Langages
                        langages={LANGAGES}
                        filterText={this.state.filterText}
                        isFullStack={this.state.isFullStack}
                        isBackEnd={this.state.isBackEnd}
                        isFrontEnd={this.state.isFrontEnd}
                    />
                </div>
                <Title>Projets</Title>
            </>
        );
    }
}

export default LangagesComponent;
