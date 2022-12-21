import styled from "styled-components"

const Footer = () =>{
    return(
        <Seccion>
            <h1>Contáctame</h1>
            <div>
                <a href="/">
                    <svg width="256" height="250" viewBox="0 0 256 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_410_2)">
                            <path d="M128.001 0C57.3173 0 0 57.3067 0 128.001C0 184.555 36.6762 232.536 87.5349 249.461C93.932 250.646 96.2806 246.684 96.2806 243.303C96.2806 240.251 96.1619 230.168 96.1068 219.472C60.4968 227.215 52.9826 204.37 52.9826 204.37C47.16 189.575 38.7704 185.641 38.7704 185.641C27.1569 177.696 39.6458 177.859 39.6458 177.859C52.4993 178.762 59.2674 191.05 59.2674 191.05C70.6838 210.618 89.2116 204.961 96.5159 201.69C97.6647 193.418 100.982 187.771 104.643 184.574C76.2118 181.338 46.3248 170.362 46.3248 121.316C46.3248 107.341 51.3251 95.9224 59.5132 86.9584C58.1842 83.7344 53.8029 70.7156 60.7532 53.0844C60.7532 53.0844 71.5019 49.6442 95.9626 66.205C106.173 63.3689 117.123 61.9466 128.001 61.8978C138.879 61.9466 149.838 63.3689 160.067 66.205C184.498 49.6442 195.232 53.0844 195.232 53.0844C202.199 70.7156 197.816 83.7344 196.487 86.9584C204.694 95.9224 209.66 107.341 209.66 121.316C209.66 170.479 179.716 181.304 151.213 184.473C155.804 188.445 159.895 196.235 159.895 208.177C159.895 225.303 159.747 239.087 159.747 243.303C159.747 246.71 162.051 250.701 168.539 249.444C219.37 232.5 256 184.536 256 128.001C256 57.3067 198.691 0 128.001 0ZM47.9406 182.34C47.6586 182.976 46.6582 183.167 45.7467 182.73C44.8183 182.313 44.2969 181.446 44.5979 180.808C44.8734 180.153 45.876 179.97 46.8023 180.409C47.7328 180.827 48.2627 181.702 47.9406 182.34ZM54.2368 187.958C53.6263 188.524 52.433 188.261 51.6233 187.367C50.786 186.474 50.6292 185.281 51.2481 184.707C51.8776 184.141 53.0349 184.406 53.8743 185.298C54.7116 186.201 54.8748 187.386 54.2368 187.958ZM58.5562 195.146C57.772 195.691 56.4896 195.18 55.6968 194.042C54.9126 192.904 54.9126 191.539 55.7138 190.992C56.5087 190.445 57.772 190.937 58.5753 192.066C59.3575 193.224 59.3575 194.589 58.5562 195.146ZM65.8614 203.471C65.1598 204.245 63.6654 204.037 62.5717 202.982C61.4525 201.949 61.1409 200.485 61.8446 199.711C62.5547 198.935 64.0575 199.153 65.1598 200.201C66.2705 201.231 66.6096 202.706 65.8614 203.471ZM75.3025 206.282C74.993 207.284 73.5538 207.74 72.104 207.314C70.6563 206.875 69.7088 205.701 70.0013 204.688C70.3023 203.679 71.7479 203.204 73.2083 203.66C74.6539 204.096 75.6035 205.262 75.3025 206.282ZM86.0469 207.474C86.083 208.529 84.8536 209.405 83.3317 209.424C81.8013 209.458 80.5634 208.603 80.5465 207.565C80.5465 206.499 81.7483 205.632 83.2787 205.606C84.8006 205.577 86.0469 206.424 86.0469 207.474ZM96.6021 207.069C96.7844 208.099 95.7267 209.157 94.2154 209.439C92.7296 209.71 91.3539 209.074 91.1653 208.053C90.9809 206.997 92.0576 205.939 93.5414 205.666C95.0548 205.403 96.4093 206.022 96.6021 207.069Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_410_2">
                                <rect width="256" height="250" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href="/">
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M160 0C165.304 0 170.391 2.10714 174.142 5.85786C177.893 9.60859 180 14.6957 180 20V160C180 165.304 177.893 170.391 174.142 174.142C170.391 177.893 165.304 180 160 180H20C14.6957 180 9.60859 177.893 5.85786 174.142C2.10714 170.391 0 165.304 0 160V20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0H160ZM155 155V102C155 93.3539 151.565 85.062 145.452 78.9483C139.338 72.8346 131.046 69.4 122.4 69.4C113.9 69.4 104 74.6 99.2 82.4V71.3H71.3V155H99.2V105.7C99.2 98 105.4 91.7 113.1 91.7C116.813 91.7 120.374 93.175 122.999 95.8005C125.625 98.426 127.1 101.987 127.1 105.7V155H155ZM38.8 55.6C43.2556 55.6 47.5288 53.83 50.6794 50.6794C53.83 47.5288 55.6 43.2556 55.6 38.8C55.6 29.5 48.1 21.9 38.8 21.9C34.3178 21.9 30.0193 23.6805 26.8499 26.8499C23.6805 30.0193 21.9 34.3178 21.9 38.8C21.9 48.1 29.5 55.6 38.8 55.6M52.7 155V71.3H25V155H52.7V155Z" fill="black"/>
                    </svg>
                </a>
                <a href="/">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58 0H142C174 0 200 26 200 58V142C200 157.383 193.889 172.135 183.012 183.012C172.135 193.889 157.383 200 142 200H58C26 200 0 174 0 142V58C0 42.6174 6.1107 27.8649 16.9878 16.9878C27.8649 6.1107 42.6174 0 58 0M56 20C46.4522 20 37.2955 23.7928 30.5442 30.5442C23.7928 37.2955 20 46.4522 20 56V144C20 163.9 36.1 180 56 180H144C153.548 180 162.705 176.207 169.456 169.456C176.207 162.705 180 153.548 180 144V56C180 36.1 163.9 20 144 20H56ZM152.5 35C155.815 35 158.995 36.317 161.339 38.6612C163.683 41.0054 165 44.1848 165 47.5C165 50.8152 163.683 53.9946 161.339 56.3388C158.995 58.683 155.815 60 152.5 60C149.185 60 146.005 58.683 143.661 56.3388C141.317 53.9946 140 50.8152 140 47.5C140 44.1848 141.317 41.0054 143.661 38.6612C146.005 36.317 149.185 35 152.5 35ZM100 50C113.261 50 125.979 55.2678 135.355 64.6447C144.732 74.0215 150 86.7392 150 100C150 113.261 144.732 125.979 135.355 135.355C125.979 144.732 113.261 150 100 150C86.7392 150 74.0215 144.732 64.6447 135.355C55.2678 125.979 50 113.261 50 100C50 86.7392 55.2678 74.0215 64.6447 64.6447C74.0215 55.2678 86.7392 50 100 50M100 70C92.0435 70 84.4129 73.1607 78.7868 78.7868C73.1607 84.4129 70 92.0435 70 100C70 107.956 73.1607 115.587 78.7868 121.213C84.4129 126.839 92.0435 130 100 130C107.956 130 115.587 126.839 121.213 121.213C126.839 115.587 130 107.956 130 100C130 92.0435 126.839 84.4129 121.213 78.7868C115.587 73.1607 107.956 70 100 70Z" fill="black"/>
                    </svg>
                </a>
                <a href="/">
                    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M180 140H160V52.5L100 90L40 52.5V140H20V20H32L100 62.5L168 20H180M180 0H20C8.9 0 0 8.9 0 20V140C0 145.304 2.10714 150.391 5.85786 154.142C9.60859 157.893 14.6957 160 20 160H180C185.304 160 190.391 157.893 194.142 154.142C197.893 150.391 200 145.304 200 140V20C200 14.6957 197.893 9.60859 194.142 5.85786C190.391 2.10714 185.304 0 180 0V0Z" fill="black"/>
                    </svg>
                </a>
            </div>
        </Seccion>
    )
}

export default Footer

const Seccion = styled.footer`
    height: 20vh;
    width: 100%;
    background-color: ${({theme})=> theme.noFondo} ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: ${({theme})=> theme.noTexto};
        font-family: ${({theme})=> theme.fuente.Italiana};;
        margin: 0;
        margin-top: 3vh;
        font-size: 1.7em;
    }
    div{
        display: flex;
        a{
            margin: 20px;
            svg{
                color: ${({theme})=> theme.noTexto};
                width: 1.2em;
                height: fit-content;
            }
        }
    }
`