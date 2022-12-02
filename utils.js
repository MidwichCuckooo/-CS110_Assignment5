

function sumOfMatrices(mat1, mat2) {

    let prodMat = [];
    let row = [];
    let num = 0;

    for (let i = 0; i < mat1.length; i++) {
        row = [];
        for (let j = 0; j < mat2[0].length; j++) {
            num = mat1[i][j] + mat2[j][i];
            row.push(num)
        }
        prodMat.push(row)
    }

    return prodMat;
}

function matrixProduct(mat1, mat2) {
    if (mat1.length != (mat2[0].length)) {
        console.log("the rows of the first matrix does not match the columns of the second");
    }
    let prodMat = [];
    let row = [];
    let num = 0;
    let finNum = 0;

    for (let i = 0; i < mat1.length; i++) {
        row = [];
        for (let j = 0; j < mat2[0].length; j++) {
            finNum = 0;
            for (let k = 0; k < mat1.length; k++) {
                num = mat1[i][k] * mat2[k][j];
                finNum += num
            }
            row.push(finNum)
        }
        prodMat.push(row)
    }
    return prodMat;
}

function sumOfEachRow(mat) {
    let component = 0;
    let FinArr = [];

    for (let j = 0; j < mat.length; j++) {
        component = 0;
        for (let i = 0; i < mat[j].length; i++) {
            component += mat[j][i]
        }
        FinArr.push(component)
    }
    return FinArr
}

function trim(text) {
    let i = 0;
    while (text[i] == " ") {
        i++;
    }
    let j = 1;
    while (text[(text.length - j)] == " ") {
        j++
    }
    return text.slice(i, (text.length - (j - 1)))
}

function countWords(text) {
    function trim(text) {
        let i = 0;
        while (text[i] == " ") {
            i++;
        }
        let j = 1;
        while (text[(text.length - j)] == " ") {
            j++
        }
        return text.slice(i, (text.length - (j - 1)))
    }
    text = trim(text) + " ";
    let answer = 0;
    let j = 0;
    while (j < text.length) {
        if (text[j] == " ") {
            answer += 1
            j++
            while (text[j] == " ") {
                j++
            }
        } else {
            j++
        }
    }
    return answer
}


module.exports = {
    sumOfMatrices: sumOfMatrices,
    matrixProduct: matrixProduct,
    sumOfEachRow: sumOfEachRow,
    trim: trim,
    countWords: countWords
}