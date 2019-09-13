'use strict';

module.exports = function(Pengguna) {

    // remote method (Identitas Pengguna)
Pengguna.remoteMethod(
    'getNamaLengkap',
    {
        description: 'get nama lengkap',
        accepts: [
            { arg: 'nama_lengkap', type: 'string'}
        ],
        returns:{
            arg: 'res', type:'object', root: true
        },
        http: { path: '/getNamaLengkap', verb: 'get' }
    }
);

Pengguna.getNamaLengkap = function(nama_lengkap, callback){
    new Promise(function(resolve, reject){
        var filter = {
            where: {
                nama_lengkap : {
                    like : nama_lengkap
                }
            }
        }
        Pengguna.find(filter, function(err, result){
            if(err) reject (err)
            if(result === null){
                err = new Error ("Nama Anda Tidak Dapat Ditemukan")
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
Pengguna.remoteMethod(
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

Pengguna.getID = function(id, callback){
new Promise(function(resolve, reject){
    Pengguna.findById(id, function(err, result){
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
