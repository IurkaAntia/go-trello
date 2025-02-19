const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Trello Clone. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
