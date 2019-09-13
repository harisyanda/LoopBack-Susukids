'use strict';

module.exports = function(Commodity) {

       // remote method (Product Name)
       Commodity.remoteMethod(
        'getNamaKategori',
        {
            description: 'get nama kategori',
            accepts: [
                { arg: 'nama_kategori', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNamaKategori', verb: 'get' }
        }
    );

    Commodity.getNamaKategori = function(nama_kategori, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama_kategori : {
                        like : nama_kategori
                    }
                }
            }
            Commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Kategori Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
    
//-----------------------------------------------------//
//-----------------------------------------------------//
//-----------------------------------------------------//

// remote method (Berat)
Commodity.remoteMethod(
    'getBerat',
    {
        description: 'get berat',
        accepts: [
            { arg: 'berat', type: 'string'}
        ],
        returns:{
            arg: 'res', type:'object', root: true
        },
        http: { path: '/getBerat', verb: 'get' }
    }
);

Commodity.getBerat = function(berat, callback){
    new Promise(function(resolve, reject){
        var filter = {
            where: {
                berat : {
                    like : berat
                }
            }
        }
        Commodity.find(filter, function(err, result){
            if(err) reject (err)
            if(result === null){
                err = new Error ("Berat Tidak Dapat Ditemukan")
                err.statusCode = 404
                reject (err)
            }
            resolve(result)
        })
    }).then(function(res){
        if (!res) callback (err)
        return callback (null, res)
    }).catch(function(err){
        callback(err);
    });
}

//-----------------------------------------------------//
//-----------------------------------------------------//
//-----------------------------------------------------//

// remote method (find By ID)
Commodity.remoteMethod(
    'getID',
    {
        description: 'get ID',
        accepts: [
            { arg: 'id', type: 'string'}
        ],
        returns:{
            arg: 'res', type:'object', root: true
        },
        http: { path: '/getID', verb: 'get' }
    }
);

Commodity.getID = function(id, callback){
    new Promise(function(resolve, reject){
        Commodity.findById(id, function(err, result){
            if(err) reject (err)
            if(result === null){
                err = new Error ("Id Tidak Dapat Ditemukan")
                err.statusCode = 404
                reject (err)
            }
            resolve(result)
        })
    }).then(function(res){
        if (!res) callback (err)
        return callback (null, res)
    }).catch(function(err){
        callback(err);
    });
}
};
