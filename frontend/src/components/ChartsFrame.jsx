import Row from 'antd/lib/row'
import setting from '../setting'

const { rootEndpoint, dpList} = setting

const ChartsFrame = ({id, dateList, queryMeta}) => {
  if (id < 0) {return null}

  const date = dateList[id].date
  const queryParams = queryMeta
  const { station } = queryMeta
  queryParams.from = date + "T00:00:00.000"
  queryParams.to = date + "T23:59:59.999"
  queryParams.interval = queryParams.interval.split(" ")[0]
  const variableList = dpList.map( item => "tablevariable=" + station + "_DMPS." + item )
  delete queryParams.station
  delete queryParams.isSubmitted
  let params = []
  for (let key in queryParams) {
    params.push(key + "=" + queryParams[key])
  }
  const url = rootEndpoint + "?" + params.join("&") + "&" + variableList.join("&")

  console.log(queryParams)
  console.log(url)

  return (
    <>
      <Row>Row 1</Row>
      <Row>Row 2</Row>
    </>
  )
}

export default ChartsFrame;
