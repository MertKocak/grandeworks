import React from "react";
import "./UserInfo.css";

type UserInfoProps = {
    name: string;
    plan: string;
    avatarUrl?: string; // opsiyonel olarak avatar resmi
};

const UserInfo = ({ name, plan, avatarUrl }: UserInfoProps) => {
    return (
        <div className="user-info">
            <div className="avatar">
                {avatarUrl ? (
                    <img src={avatarUrl} alt="Avatar" className="avatar-img" />
                ) : null}
            </div>
            <div>
                <p className="name">{name}</p>
                <p className="plan">{plan}</p>
            </div>
        </div>
    );
};

export default UserInfo;
