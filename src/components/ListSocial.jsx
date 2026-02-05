import React from 'react'

export const ListSocial = ({ name, link, icon }) => {
    return (
        <li className="list-group-item mb-1 rounded">
            <a href={link} className="d-flex align-items-center gap-2">
                {icon && <span className="fs-4">{icon}</span>}
                <span>{name}</span>
            </a>
        </li>
    )
}