import { useGetCountryByNameQuery } from "../../store"

interface ListDetailsProps {
    country:string;
}
const ListDetails = ({country}:ListDetailsProps) => {
    const {data,isLoading,isError}= useGetCountryByNameQuery(country)
    if(isError){
        return <div>Error loading country details.</div>
    }
  return (
    <div>
      {
        isLoading
        ? <div>Loading...</div>:
        <table>
            <tbody>
                <tr>
                    <th style={{border:'1px solid black', width:'200px'}}>Flag</th>
                    <td style={{border:'1px solid black', width:'200px'}}>{data[0].flag}</td>
                </tr>
                <tr>
                    <th style={{border:'1px solid black', width:'200px'}}>Capital</th>
                    <td style={{border:'1px solid black', width:'200px'}}>{data[0].capital}</td>
                </tr>
                <tr>
                    <th style={{border:'1px solid black', width:'200px'}}>Region</th>
                    <td style={{border:'1px solid black', width:'200px'}}>{data[0].region}</td>
                </tr>
            </tbody>
        </table>
      }
    </div>
  )
}

export default ListDetails
