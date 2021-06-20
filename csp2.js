    let url = 'https://kewl-site.net/wectf/test.php';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }

