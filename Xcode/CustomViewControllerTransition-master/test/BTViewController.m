//
//  BTViewController.m
//  test
//
//  Created by Cameron Cooke on 23/01/2014.
//  Copyright (c) 2014 Brightec Ltd. All rights reserved.
//

#import "BTViewController.h"
#import "BTSlideInteractor.h"
#import "BTModalViewController.h"


@interface BTViewController ()
@end


@implementation BTViewController


- (void)viewDidLoad
{
    [super viewDidLoad];
}


- (void)willAnimateRotationToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation duration:(NSTimeInterval)duration
{
    NSLog(@"view frame=%@ bounds=%@", NSStringFromCGRect(self.view.frame), NSStringFromCGRect(self.view.bounds));
}


- (IBAction)showModalButtonWasTouched:(id)sender
{
    BTSlideInteractor *interactor = [[BTSlideInteractor alloc] init];
    interactor.presenting = YES;
    
    BTModalViewController *modalController = [self.storyboard instantiateViewControllerWithIdentifier:@"ModalViewController"];
    modalController.modalPresentationStyle = UIModalPresentationCustom;
    modalController.transitioningDelegate = interactor;
    [self presentViewController:modalController animated:YES completion:nil];
}


@end
