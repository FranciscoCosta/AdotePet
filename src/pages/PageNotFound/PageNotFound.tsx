import './PageNotFound.scss'

import notfound from '../../assets/NOTFOUND.jpg'
function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <div className="PageNotFound__container">
                <img src={notfound} alt="notfound" />
                <h1>404</h1>
                <h2>Página não encontrada.</h2>
            </div>
            <div className='spacer main__footer'></div>
        </div>
    )
}

export default PageNotFound
