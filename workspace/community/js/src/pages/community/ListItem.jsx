import { useNavigate } from 'react-router-dom'

export default function ListItem() {
  const navigate = useNavigate();
  return (  
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <td className="p-2 text-center">2</td>
                    <td className="p-2 truncate indent-4 cursor-pointer" onClick={() => navigate(`/info/2`)}>안녕하세요.</td>
                    <td className="p-2 text-center truncate">용쌤</td>
                    <td className="p-2 text-center hidden sm:table-cell">29</td>
                    <td className="p-2 text-center hidden sm:table-cell">2</td>
                    <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <td className="p-2 text-center">1</td>
                    <td className="p-2 truncate indent-4 cursor-pointer" onClick={() => navigate(`/info/1`)}>좋은 소식이 있습니다.</td>
                    <td className="p-2 text-center truncate">제이지</td>
                    <td className="p-2 text-center hidden sm:table-cell">22</td>
                    <td className="p-2 text-center hidden sm:table-cell">5</td>
                    <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.03 17:59:13</td>
                  </tr>
    </>
 
  )
}