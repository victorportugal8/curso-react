export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Levi Ackerman ${codigo}`,
        email: `soldadomaisfortedahumanidade${codigo}@aot.jp`
    })
}