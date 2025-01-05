import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Kiểm tra trạng thái đăng nhập từ localStorage
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token); // Đặt trạng thái đăng nhập nếu token tồn tại
    }, []);

    const handleLogout = () => {
        // Xóa token và trạng thái đăng nhập
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        navigate("/login"); // Điều hướng về trang đăng nhập
    };

    return (
        <div className="fixed top-0 w-full h-16 flex items-center bg-white shadow-md px-6">
            <div className="flex flex-1">
                <Link to="/" className="text-xl font-bold text-blue-500">
                    MyApp
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Đăng xuất
                    </button>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Đăng nhập
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
