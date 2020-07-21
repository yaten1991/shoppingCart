export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor( id, name, description = '', price = 0, imageUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcAhwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQUGBwMECAL/xAA8EAABAwMDAgQEAwYDCQAAAAABAgMEAAURBhIhMUEHE1FhFCJxgTKRsRUjQlKhwRck8CYzQ2KCwtHS4f/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQECAwYH/8QAKhEAAgICAQMCBAcAAAAAAAAAAAECAwQREgUhMRNBBiIzURQyUmFxgZH/2gAMAwEAAhEDEQA/ALxooooBKKWigEopaKAQ9KoHxC8ULw5epEHT8tUOLHdWz5iAnc6UnBOTnjIP5e9X8rpXIOrLdKtuo7lElpWlbUlwDPdJUSD9CCD96Atnwq8SZlyvbdjvD7klMhP+WkPBIc8wJyUq28EHCsH2FXLiuWvCW3yLhr61iOklMZZkPKA4QhI7/UkD711E462y2px1aUISMqUo4AHuawD3ivLriGkFbighCRkqUcACmuDqiwXCUIsG9W6RIPRpqShSj9ADzVc+P99ehwbfaW0tlqYlxbvmbudu0JHBGeVE88cdKyC1Y0yLLCjFkNPpScEtLCsH7VnxXLnhff5dt1pagy4fJeWiI62OA4hRIGcdSCrOevFdSDpQCYpaKKAKKKKAKKKKAKKKSgForG682yhS3VpQhIypSjgAUwDXOmDI8j9txA5nbyrAz9elZUW/CMbSJHUe1LovT+pild4t6XnUDal5K1IXj0ykjI+tNusPEazaVlx4stL8h51AdKY4B2NnOFZJwclJ6UxK8b9N9Exbifo2gf8AdWDJGRb1eFXiZEcYUv8AYF1/c5Uoq2JJHCs90qwQf5Sfetfxr1S/c74vTUaUliBESDISvIEh3rjIHQcY6DOcngVual1D/iZptEKNBS08zMLhcLqdqEgEJGTzuIVz24qPr0FeZEiZcmH7fMlglxUVxRV5hUCOpwMjORk9RW/D5eRjffRDLehS5UREFpYltq3Nra5UVjkK69sVP9YXCR4pTLVBsNuedmQ4ilyHVkISFKxuGScYykY9c+xqt7hDmQXFsTo7jK0HapLqMc/X7ipr4cahuulYlwukWNHet+W/iUPKKSsAn/dEfxc98iuZsSvwu8L7pAvrF31EyiMmIoqZjhwKUteCATjgAdevWrtHSqgY8drc7IbQqySkNqUApXnJURn0HerebUFIChnBGeayYPVFFFAFFFFAFFFFAFYpLzcdlbzziW220lSlqOAkDuTWWoB4wzVx9OIitrKfiV/NjuEjOPzxW9UPUmoms5cVshfilrxq8NtW2zvOfC5PnKPHmenHp16+tVgtIBz3qUyNB6hGn0X/AOGSqMQFhhBJe8s/xlOOmOfWosXUFvcFpx65q3r9OK4wfZEZqW9skNgmaelIai6vjynmmSEx347hSttHJ8s+qckkemT61alg8O/Dq7RRKtkYy2uh3SnCUn0IzkH2NQjS3hbdNQ2kXF2Um3hR/cNvMklxOPxHkYHpWNiJqPw31HGL6U4fUEhxtW5mSkHlJ44OOemRUSyumxvi9M6Rc462uxZcbQultPQ5DQadUJDqnBl070g9EgjHyj3pmiRm7SZIirWGnVZAWckDsM96b1eIVuukh15DE5xXJKUtA7Uj05prVfImoprbNuu79vdaUFbHmgG3BkcE9c/evLWTzbruKXGP3LOKqhDb7sf1vx33xHey64sFYbKjjHqcf3rUnW+E8hszYyHmmVBaUOZUg49RnB+lPFtaYQXXQI5dKyFlgDbnJ4+1MVp1ZHvt2mW1cQJUgObNxzuCcJO4YGM54wT0PTv0/BS8qxmPWX6USvTrukX2W5SrFa2Hm1/I+3CbwSO6SB+lTth5t5pLjS0rQocKScg1U82U3p7TjzkOMVoiMAJaBwCkYAz3wOp+9Pnhnf1XdhDgTtS8FBSecBaTyRmrGDaSRGZYNFFFdTUKKKKAKKKKAQ1WnjUCIdqUACPOcSc9/k6f0NWWarnxvT/s1DdHPlzBz9UqFSMT68Tnb+RkhtuoobGl7VKXkqfhtKS0gZP4Rn6c8U0/H21yWqYnTUQSOzymkbyfc4qAaBupVGW3PWQloJaaLvACRnipwltC8EHr0wK831TNycbIlDWl7Fhj01zgn5HlnVjm4B+Dj12rz/avV8ctmoLU5GfSFFBDiUOJIyU+n9R96aVshnAdQBnkZSKxLdRuCSraCe3Gagw6rctxkzq8aL00NkTStrgMrlW9lcR0Hy9zLq0nBBzyDTY3pK1xnvi2oyXVDgpeO8c+xqWlwfBlvkEuZPPtTe6eCO1RJZl0dak/BIjXHvtGtEehxAlplpEYY+ZtI2gn1rx5FtgyX7kzGYRIe/GtI+Zz6/kPy5rzLClNL8pDKncfL5oJTn3xzUcVcL6yra7puOo56tOEjH1zVxh5Vl1b7rZHnjpS7D1aZ2I4jy/lWEkblDKVp/1xzU20VbmmUGSz5aWQNjaG+AD34HT/AO1WcF68yl4cgQYjRBByStw544G7j6mrK0K/tEiITkAJUnn7H+1SaLpxtVU3s5XVJJyRLhS0gpatCGFFFFAFFFFAIapPxD1ObjfH4CF/5aKrYlBHBV3V9auw1zVqG3SGLrJWpO4KcUonvnPerPpcIyubl7EbKbUdI8hxIcClJBbJ+YJ4zTjaNVu2lKoriS81k+VvVgpz26dKY2ZC2W30EcPN7Dke4P6gVoy3ytKy7ku/LtXnpjj9MflVtm4VGTDhdHaIlFs63uDJjL1w/wAhLABAwdzhOKY39ayVvIz5eAoZ+Y8c0wOqygKB4UM02PpSc4zVNb0XBrT4VonQy7n5kdF7vlUO3Wm65S2oUZyQ+cISPuT2FQZGr7t5KdzyCSkc+UKbLhc5c85lPLXjoOw+1UGP8H5DsTuklH9ibZ1aHHUV3Ha4avlJVlhplCT0CsqI+vbNNTuq7o5nDzafo0n+9M7o+bNapK3XfLZBWsdgcYr0dnTun4kfppECORkWvXIfFX25ugBc57Hok7f0qaeENwdRqvynXVrTIYUn5lEncOR+hqpHJEtiQplbSdyDhSUpJqwfB574jWEPGUrQFFSD6bTXDljuDUIpf0ZatUvmZ0UOlLSA0tQjuFFFFAFFFFAIapHxRu0OFrJyCtkIbVGbWp5HICyVZyPptq7jXLGuYU1OpLk+6pbshyS4Xd3oFYA+wxXWmcoS5R9jScVJaZtSG0uDcgpWk8hSTkGmec3tQQo4HqabLe8uHLQRvLG7DiMnj3xW3eo/mbX2FKcQR8238Ix3q7Wc7KXJLuvYiehxnpvsayZTYjbVKGUkjjvWi4/uPyJNeSBsAxg59azQIrsh0hkchJ+YnAH1qslk22tRRKVcYrZLGEZiMnH/AA0/oKxOcVutoCGEI9Egf0pvuDqYzC3Seg4+telcuFa5eyK3W5dhvluOuyEQ4iSuQ6raEp61ONI6CQ2oSLgTnqUg9TTB4VRvjdTvSXRktR1KBP8AMcf2zVyRwG0JA44FfNPiDqlrt9OD7Ho8HGjGHJnhi2xI7RUxHZRjqEoAJrGAzFlInMtsiU0cIX5Q3AHrz6VsuE7cj7U2zCQkHP4ua8zXdbGXKLeyc4Ra0yfWa5t3KNvGEuJ4Wj0P/inIVXOmp6ot0bAJKXT5akjnr0P54qxRXscDJd9W35Kq6vhLQtFFFTjiFFFFABqpvHWA9Ggw77DaQpLK/JlAp4KVfhJ+h4/6qtmtW4wY1yhPw5rKXo76ChxtQyFA0ByM5LjSGkuvRsKPykpPNTrQ2j7td9Nu3iMA8w68UNR1HC1BPBUCeOvGPapt/ghYfj0OqnT1Q0nJiEp59t4Gcf196sqBBjW+EzDhMoYjsp2ttoGAkV2qunVLlE0nBTWmc33LTbHmqakxlsPA4UlSdqvypuYsoiSCkSFFtOFlBSOea6duNrg3Jvy50Vp9PbenJH0PUVBdQeGDUh1t+yyhHWnIU0/lSSD6Ecjp71Z052PKSlZHT+5GlTYu0XsqhxYQkkmtOLZJ+p5aYVsZLrhOdgUE4SO5J4Aq34HhJBzuu9xfknA/dsp8pKT35ySf6VLNOaRs2nFuOWqIUOuJ2rdWsrUR6ZNMvqNdkeMBVRKL2yuNN+GF9scWQ+i5w4T608lCC7hIB45AHeq0m631Q+ztROW20jq4w0EEj3UBXRHiEq6o069+xg4XSra4GU5XsIOccH2rnme2WLW00hGQlRTgjaD17Htxj7VXUdNqyFK6et/x3JMsiUNQRpQ9YX5tSvNvVw/Cdv7zcAfcK7VsL1nqNXH7TUUY4JZb/wDWo2R8xJGB6VlQdyOenbFQ5Y9T8xX+HZWSXhk10PrW6wdUwn59xU5FW4lp9Ln4fLUQCQB0I659q6dFcWgZBT6giuv9Ly1T9OWyWs5W9FbWonuSkZraMVHskattvbHSiiitjAUUUUAUUUUAUUVilFwR3SwMuhCtg/5scUBlophEm+hxTfwjBAztcOR/H3Gf5fftn2rZTIuHwbqnGAJPRCUJ4zk88np0oB1oqNl++iAT5eJGCOEj+ZOD0/lKu3bv1rfsbtxdQ+bm15avM/djA4Tgccehz6/U0A5rHFc4+JcT9g3uZD8hzySpLrCsDbsVk8H2O4Y9q6PNQ7xK0YjV1pCWFJauMcEx3D0VnqhR9DgH2IHvXam+dLbj7mkoKXk5YJJ3E9SSaysfgOeK3LnaZtnlLiXaE/EdBIKXUYH59D9qxDa2AkdScAeprm+5ueUJyoBHzKJwkDqT2Fdfacgm22G3QVfijxm21fUJANVB4ReHMhUpjUN9ZUwho7okVacKWrstQ7Adh9DV3itQLRRRQBRRRQBRRRQBRRRQCYFGB6UUUAYHpQAB2oooBaSiigMUiNHlNluSw08g9UuICh+RpvhaZsECQJEGx2yM+OjrMRtCh9wM0UUA64FLRRQBRRRQH//Z"){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

export class FilterObject{
    name: string;
    price: number;
}
