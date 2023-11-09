import { toast } from "react-hot-toast";

export default function Table({ students }) {
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-center" colSpan={2}>
                Name
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-center">
                NRP / Student ID
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-center">
            {students.map((student) => {
              return (
                <tr key={student.nrp}>
                  <td className="border-b border-slate-100 p-2 pl-8 text-slate-500 capitalize">
                    {student.name}
                  </td>
                  <td>
                    <svg
                      onClick={() => {
                        
                        navigator.clipboard.writeText(student.name);
                        toast.success(`Copied ${student.name} to clipboard`);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover-pointer text-gray-500 hover:text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </td>
                  <td className="border-b border-slate-100 p-4 text-slate-500">
                    {student.nrp}
                  </td>
                  <td>
                    <svg
                      onClick={() => {
                        navigator.clipboard.writeText(student.nrp);
                        toast.success(`Copied ${student.nrp} to clipboard`);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover-pointer text-gray-500 hover:text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
