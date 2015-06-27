angular.module('app')
.controller("PostsCtrl",function($scope,PostSvc){
            PostSvc.fetch()
               .success(function(posts){
                    $scope.posts=posts;   
               });
            // add post to posts list    
            $scope.addPost=function(){
                // only add post if it has postbody
                if($scope.postBody){
                    PostSvc.create({body:$scope.postBody})
                    .success(function(post){
                        //$scope.posts.unshift(post);
                        $scope.postBody = null;
                    });
                }
            } 
            
            $scope.$on('ws:new_post',function (_,post) {
                $scope.$apply(function(){
                    $scope.posts.unshift(post);
                })
            })
    });