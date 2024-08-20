const ListCard = () => {
    return (
        <>
            <div className='col-md-7'>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h5>Data</h5>
                        <table className='table mt-4'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Judul</th>
                                    <th scope='col'>Jumlah</th>
                                    <th scope='col'>Jenis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Gaji Bulanan</td>
                                    <td>Rp. 2.000.000</td>
                                    <td>Pemasukan</td>
                                </tr>
                                <tr>
                                    <th scope='row'>2</th>
                                    <td>Makan</td>
                                    <td>Rp. 800.000</td>
                                    <td>Pengeluaran</td>
                                </tr>
                                <tr>
                                    <th scope='row'>3</th>
                                    <td>Kosan</td>
                                    <td>Rp. 800.000</td>
                                    <td>Pengeluaran</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListCard;
