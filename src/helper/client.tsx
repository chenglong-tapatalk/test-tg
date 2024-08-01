export function post(url: string, data: any, config?: any) {
    const baseUrl = 'https://bot-api.yesbloom.xyz';
    const token = 'boot.app.d23a91932e8670fdf19510b01c91796b.dfe5f91888e64167b38d74b9c6f51934';
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", typeof data == 'object' ? "application/json" : 'application/x-www-form-urlencoded');
    myHeaders.append("Authorization", token);
    if (config) {
        config.map((conf)=>{
            myHeaders.append(conf.name,conf.value);
        })
    }
    const requestOptions = {
        method: 'POST',
        body: typeof data == 'string' ? data : JSON.stringify(data),
        headers: myHeaders
    };
    console.log(typeof data,data,requestOptions);

    return fetch(baseUrl+url, requestOptions)
        .then(response => response.text())
        .then(res => {
            const r = JSON.parse(res);
            return r.data ? r.data : [];
        })
        .catch((error) => {
            console.log('error', error);
            return false;
        });
}




