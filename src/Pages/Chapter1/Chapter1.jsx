import statement from './statement'
import plays from './plays.json'
import invoices from './invoices.json'
import CodeBox from '../../Components/CodeBox/CodeBox'

export default function Chapter1(){

    const result = statement(invoices[0], plays)

    return (
        <>
            <p>{result}</p>
            <CodeBox codeToShow={statement.toString()}/>
        </>
    )

}