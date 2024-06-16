exports.getDummyData = (req, res, next) => {
    res.status(200).json([
        {
            id: 1,
            user: "Gaurav",
        },
        {
            id: 2,
            user: "Amit",
        },
    ]);
};