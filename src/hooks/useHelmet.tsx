import { Helmet as ReactHelmet } from "react-helmet";

interface useHelmetProps {
    title: string;
}

export const useHelmet = ({ title }: useHelmetProps) => {

    const Helmet = () => (
        <ReactHelmet>
            <title>{title}</title>
        </ReactHelmet>
    );

    return {
        Helmet
    };
}

export default useHelmet;