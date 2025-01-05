import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Gửi yêu cầu đăng ký đến API
            const response = await axios.post("http://152.42.160.239:3333/auth/user/register", {
                username,
                password,
                email,
            });

            console.log("API Response:", response);

            if (response.status === 200 && response.data?.success) {
                toast.success("Đăng ký thành công!", {
                    position: "top-right",
                    autoClose: 3000,
                });

                setUsername("");
                setPassword("");
                setEmail("");

                navigate("/login");
            } else {
                toast.error(response.data?.message || "Đăng ký thất bại!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error: any) {
            console.error("Error:", error);

            if (error.response) {
                console.error("Error response:", error.response);
                toast.error(error.response?.data?.message || "Đã xảy ra lỗi từ máy chủ!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            } else {
                toast.error("Không thể kết nối với máy chủ!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-lg shadow-lg w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Tên đăng nhập</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Nhập tên đăng nhập"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Nhập email"
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                        Đăng ký
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                    >
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
