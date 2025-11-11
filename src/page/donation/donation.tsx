import React, { useEffect } from 'react'

export function Donation() {
  useEffect(() => {

  }, [])

  return (


    <div className='donation-container' style={{
      textAlign: 'center',
      marginTop: '5rem',
      marginBottom:'7rem'
    }}>

      <h1 ><strong>捐赠</strong></h1>
      <br />

      <p style={{fontSize: '1rem'}}>WinNew为<strong>非盈利项目</strong>。如果你觉得项目不错请考虑捐赠，以维持项目的持续维护。</p>
      <br />

      <h2>捐赠途径</h2>
      <br />

      <table className='donation-table'>
        <thead>
          <tr>
            <th>微信支付</th>
            <th>支付宝</th>
            <th>QQ支付</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td ><img src="https://cnb.cool/hechangfeng/assets/-/git/raw/main/hefung/wxpay.png" /></td>
            <td ><img src="https://cnb.cool/hechangfeng/assets/-/git/raw/main/hefung/alipay.png" /></td>
            <td ><img src="https://cnb.cool/hechangfeng/assets/-/git/raw/main/hefung/qqpay.png" /></td>
          </tr>
        </tbody>
      </table>
      <h3>感谢您捐赠！</h3>
    </div>

  )
}
