import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from './Loading';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center h-screen w-full justify-center">
        <div className="w-3/12">
          <div className="bg-white h-96 shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img className="w-32 h-32 rounded-full mx-auto shadow-xl" src={user.picture} alt={user.name} />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-700 font-bold leading-8">{user.name}</h3>
              <div className="text-center text-orange-500 text-xs font-semibold">
                <p>VacaNation</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-orange-500 font-semibold">Email</td>
                    <td className="px-2 py-2 text-gray-700">{user.email}</td>
                  </tr>
                </tbody></table>

            </div>
          </div>
        </div>

      </div>
    )
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});