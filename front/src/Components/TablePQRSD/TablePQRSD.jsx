import {useEffect, useState} from 'react'
import {getFilingsApi} from '../../api/apiRecords'


import "./TablePQRSD.scss"
export  function TablePQRSD() {
    const [PQRSDs, setPQRSDs] = useState ([]);
    const [keysPQRSDs, setKeysPQRSDs] = useState ([]);

    useEffect(() => {
        const fetchData = async () => {
              const data = await getFilingsApi();
              setPQRSDs(data);
              setKeysPQRSDs(Object.keys(data[0]))
        };
        fetchData();
    }, [])

    return (
        <>
            <div>
            <table className="text_table_general ui celled table">
                <thead>
                    <tr>
                        {keysPQRSDs.map((item, key) => (
                            <th key={'n'+String(key)}>{item}</th>
                        )
                        )}
                    </tr>
                </thead>
                <tbody>
                        {Object.keys(PQRSDs).map((item) =>(
                            <tr key={'f'+String(item)}>
                                {
                                    keysPQRSDs.map((k,i) =>(
                                        <th key={'fi'+String(i)}>{PQRSDs[item][k]}</th>
                                    )
                                    )
                                }
                            </tr>
                        )
                        )
                        }
                </tbody>
            </table>
            </div>
        </>
    )
}
