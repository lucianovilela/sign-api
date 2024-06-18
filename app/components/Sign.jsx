import React from 'react';
import moment from 'moment';
function Sign({person}) {
    return (
        <div className="mt-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img alt="Aries" src={person.image} className="w-full h-32 object-cover rounded-lg mb-2" />
                    <h3 className="text-lg font-semibold">{person.info.name}</h3>
                    <h3 className="text-lg font-semibold">{person.signo.name}</h3>
                    
                    <p className="text-sm text-blue-600">{moment(person.info.birthDate.date).format('MMM, Do YYYY')}</p>
                </div>
            </div>
        </div>
    )
}

export default Sign