import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import thư viện Toastify
import axios from "axios";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate(); // Hook điều hướng để chuyển trang

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log('1')
            const response = await axios.post("http://152.42.160.239:3333/auth/login", {
                username,
                password,
            }, {
                headers: { "Content-Type": "application/json" },
            });



            console.log('2')

            // Lấy dữ liệu từ phản hồi
            const { token } = response.data;

            // Lưu token vào localStorage
            localStorage.setItem("authToken", token);

            // Hiển thị thông báo thành công
            toast.success("Đăng nhập thành công!", {
                position: "top-right",
                autoClose: 3000,
            });

            // Chuyển hướng sang trang chủ
            setTimeout(() => {
                navigate("/home");
            }, 3000);
        } catch (error: any) {
            console.log(error)
            // Kiểm tra lỗi và hiển thị thông báo phù hợp
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || "Đăng nhập thất bại!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            } else {
                toast.error("Có lỗi xảy ra. Vui lòng thử lại!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-lg shadow-lg w-80"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Tên đăng nhập
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Nhập tên đăng nhập"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Đăng nhập
                </button>
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Chưa có tài khoản? </span>
                    <Link
                        to="/register"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Đăng ký tại đây
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
