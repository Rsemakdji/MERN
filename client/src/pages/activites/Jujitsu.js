import React from 'react';
import Left from '../../components/sideBar/Left';
import Right from '../../components/sideBar/Right';


function Jujitsu() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-2">
                    <Left></Left>
                </div>
                <div className="col-8 text-white">
                    <h1>ju-jitsu + image + fond d'écran  </h1>
                    <hr className="my-5" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima perspiciatis facere, nulla incidunt labore, ullam debitis cumque, voluptate nesciunt fuga nihil tempore a! Perspiciatis eveniet corrupti asperiores. Nostrum rerum illo dolorum assumenda. Rerum quas aliquid sequi recusandae exercitationem, blanditiis minima excepturi rem distinctio numquam tenetur harum itaque nihil omnis in animi provident quis beatae suscipit dolorem? Sint non, quae voluptate dolores maxime sunt aperiam eveniet accusamus labore ea, ipsam perferendis eaque magni quis distinctio mollitia, vel odit? Veniam quod dignissimos commodi odit rerum aut quae, sed est pariatur necessitatibus nostrum cumque numquam nisi repellat quaerat a odio natus magni non facere ex minus alias ad ea. Ullam doloremque sit corrupti, officiis ad non id est eius illo consequatur, atque vitae dolores aliquam exercitationem praesentium? Recusandae optio autem inventore incidunt praesentium libero, nihil ea obcaecati, a architecto nisi modi molestiae, unde fugit repudiandae minus sequi at. Similique laboriosam fugit, ipsum reiciendis voluptatem libero nam a porro deserunt cupiditate numquam ducimus ex, quaerat perspiciatis neque magnam doloremque eos tempora tenetur voluptates ipsa! Similique optio in sapiente adipisci omnis fugiat nisi eius cumque qui repellendus illo, dolorem commodi ut labore non accusantium ipsam earum explicabo. Ut ipsum beatae deleniti consequuntur placeat repudiandae quis?</p>
                    <hr className="my-5" />
                    <div className="row">
                        <div className="col-4">
                            <a href="/Jujitsu">JITSU</a>
                        </div>
                        <div className="col-4">
                            <a href="/Judo">JUDO</a>
                        </div>
                        <div className="col-4">
                            <a href="/Taiso">TAÏSO</a>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <Right></Right>
                </div>
            </div>
        </div>

    )
}
export default Jujitsu;